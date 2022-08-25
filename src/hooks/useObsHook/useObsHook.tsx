/* istanbul ignore file */
import React from "react";
import OBSWebSocket, { OBSRequestTypes } from "obs-websocket-js";
import { IntObsScene, IntObsSource } from "../../types";
import _map from "lodash/map";
import { useGlobalData } from "../";

//https://github.com/obsproject/obs-websocket/releases/tag/5.0.0

export interface IntUseObsHook {
  getScenes: () => IntObsScene[];
  getSources: () => IntObsSource[];
}

const useObsHook = () => {
  const { state } = useGlobalData();
  const address = `ws://${state?.settings?.features?.obs?.ipAddress}:${state?.settings?.features?.obs?.port}`;
  const password = state?.settings?.features?.obs?.password || undefined;

  const getScenes = async () => {
    try {
      const obs = new OBSWebSocket();
      await obs.connect(address, password);
      const data = await obs.call("GetSceneList");
      await obs.disconnect();

      const allScenes: IntObsScene[] = [];
      _map(data.scenes, scene => {
        allScenes.push({ name: scene.sceneName as string });
      });

      return allScenes;
    } catch (error) {
      return [];
    }
  };

  const getSources = async () => {
    try {
      const obs = new OBSWebSocket();
      await obs.connect(address, password);
      const { scenes } = await obs.call("GetSceneList");
      const fullArray: IntObsSource[] = [];

      for (const scene of scenes) {
        let { sceneItems } = await obs.call("GetSceneItemList", {
          sceneName: scene.sceneName as string
        });

        for (const item of sceneItems) {
          fullArray.push({
            scene: scene.sceneName as string,
            sceneItemId: item.sceneItemId as number,
            sourceName: item.sourceName as string
          });

          if (item.isGroup) {
            const { sceneItems: groupItems } = await obs.call(
              "GetGroupSceneItemList" as any,
              {
                sceneName: item.sourceName as string
              }
            );

            groupItems.forEach((gItems: any) => {
              fullArray.push({
                scene: scene.sceneName as string,
                sceneItemId: gItems.sceneItemId,
                sourceName: gItems.sourceName as string
              });
            });
          }
        }
      }

      await obs.disconnect();
      return fullArray;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return {
    getScenes,
    getSources
  };
};

export default useObsHook;
