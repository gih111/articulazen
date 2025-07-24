// Utilitários para a VSL (Video Sales Letter)

export const VSL_CONFIG = {
  playerId: 'vid-6882458ee82e39bf92b7d0aa',
  scriptUrl: 'https://scripts.converteai.net/04883032-8909-4934-b670-acdef3d1ec63/players/6882458ee82e39bf92b7d0aa/v4/player.js',
  buttonShowDelay: 155000, // 2 minutos e 35 segundos em milissegundos
};

export const loadVSLScript = (): void => {
  const script = document.createElement('script');
  script.src = VSL_CONFIG.scriptUrl;
  script.async = true;
  document.head.appendChild(script);
};

export const setupButtonTimer = (callback: () => void): NodeJS.Timeout => {
  return setTimeout(callback, VSL_CONFIG.buttonShowDelay);
};