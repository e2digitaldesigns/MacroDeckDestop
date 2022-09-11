import React from "react";
import { IpcRendererTypes } from "../../types";
import { MDAudio, MDHTMLAudioElement } from "./MDAudio";
import { useElectron } from "../../hooks";

export const playMethod = (e: object, data: string) => {
  const audioObj: MDHTMLAudioElement = new MDAudio(data);

  audioObj.addEventListener("canplaythrough", () => {
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
