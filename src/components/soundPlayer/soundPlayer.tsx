import React from "react";
import { IpcRendererTypes } from "../../types";
import { MDAudio, MDHTMLAudioElement } from "./MDAudio";
import { useElectron } from "../../hooks";

interface IntSound {
  path: string;
  volume: number | undefined;
}

export const playMethod = (e: object, data: IntSound) => {
  const audioObj: MDHTMLAudioElement = new MDAudio(data.path);

  audioObj.addEventListener("canplaythrough", () => {
    audioObj.volume = data.volume ? data.volume / 100 : 1;
    audioObj.play();
  });
};

const SoundPlayer: React.FC = () => {
  const { ipcRenderParser } = useElectron();

  React.useEffect(() => {
    const ipcRenderer = ipcRenderParser();
    ipcRenderer && ipcRenderer.on(IpcRendererTypes.mdPlaySound, playMethod);

    return () => {
      ipcRenderer &&
        ipcRenderer.removeListener(IpcRendererTypes.mdPlaySound, playMethod);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div data-testid="sound_player" />;
};

export default SoundPlayer;
