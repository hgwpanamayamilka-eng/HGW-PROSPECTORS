/**
 * Utility functions for handling image URLs, Google Drive links, and fallbacks.
 */

export function getDirectImageUrl(url?: string | null): string {
  if (!url) return '';
  const trimmed = url.trim();

  // Handle Google Drive links: https://drive.google.com/file/d/FILE_ID/view?usp=drive_link or https://drive.google.com/open?id=FILE_ID
  const driveFileRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const driveIdRegex = /drive\.google\.com\/(?:open|uc)\?.*id=([a-zA-Z0-9_-]+)/;
  
  const matchFile = trimmed.match(driveFileRegex);
  if (matchFile && matchFile[1]) {
    return `https://lh3.googleusercontent.com/d/${matchFile[1]}`;
  }

  const matchId = trimmed.match(driveIdRegex);
  if (matchId && matchId[1]) {
    return `https://lh3.googleusercontent.com/d/${matchId[1]}`;
  }

  return trimmed;
}

export function extractDriveFileId(url?: string | null): string | null {
  if (!url) return null;
  const matchFile = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchFile && matchFile[1]) return matchFile[1];
  const matchId = url.match(/drive\.google\.com\/(?:open|uc)\?.*id=([a-zA-Z0-9_-]+)/);
  if (matchId && matchId[1]) return matchId[1];
  return null;
}

export function getEmbedVideoUrl(url?: string | null): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // YouTube standard or short
  const ytMatch = trimmed.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}`;
  }

  // Vimeo
  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  // Loom
  const loomMatch = trimmed.match(/loom\.com\/share\/([a-zA-Z0-9_-]+)/);
  if (loomMatch && loomMatch[1]) {
    return `https://www.loom.com/embed/${loomMatch[1]}`;
  }

  return trimmed;
}
