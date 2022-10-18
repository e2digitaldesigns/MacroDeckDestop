export interface subActionMapProps {
  [key: string]: { slug: string; display: string }[];
}

export const subActionMap: subActionMapProps = {
  md: [
    { slug: "mdHome", display: "Home" },
    { slug: "mdPage", display: "Go to Page" },
    { slug: "mdProfile", display: "Go to Profile" },
    { slug: "mdProfileSelector", display: "Go to Profile Select" },
    { slug: "mdReset", display: "Refresh App" },
    { slug: "mdSettings", display: "Go to Settings" }
  ],
  obs: [
    { slug: "obsLayerHide", display: "Hide Layer" },
    { slug: "obsLayerShow", display: "Show Layer" },
    { slug: "obsLayerToggle", display: "Toggle Layer" },

    { slug: "obsRecordStart", display: "Start Recording" },
    { slug: "obsRecordStop", display: "Stop Recording" },
    { slug: "obsRecordToggle", display: "Toggle Recording" },
    { slug: "obsRecordPause", display: "Pause Recording" },
    { slug: "obsRecordResume", display: "Resume  Recording" },

    { slug: "obsSceneChange", display: "Change Scene" },

    { slug: "obsStreamStart", display: "Start Streaming" },
    { slug: "obsStreamStop", display: "Stop Streaming" },
    { slug: "obsStreamToggle", display: "Toggle Streaming" }
  ],
  spotify: [
    { slug: "spotifyNext", display: "" },
    { slug: "spotifyPause", display: "" },
    { slug: "spotifyPrevious", display: "" },
    { slug: "spotifyStart", display: "" },
    { slug: "spotifyStop", display: "" }
  ]
};

export interface IntAllActionMap {
  [key: string]: string;
}

export const allActionMap: IntAllActionMap = {
  api: "API",
  delay: "Delay",
  exe: "EXE",
  keyTap: "Key Press",
  sound: "Sound",

  mdHome: "Home",
  mdPage: "Go to Page",
  mdProfile: "Go to Profile",
  mdProfileSelector: "Go to Profile Select",
  mdReset: "Refresh App",
  mdSettings: "Go to Settings",

  obsLayerHide: "Hide Layer",
  obsLayerShow: "Show Layer",
  obsLayerToggle: "Toggle Layer",

  obsRecordStart: "Start Recording",
  obsRecordStop: "Stop Recording",
  obsRecordToggle: "Toggle Recording",
  obsRecordPause: "Pause Recording",
  obsRecordResume: "Resume  Recording",

  obsSceneChange: "Change Scene",

  obsStreamStart: "Start Streaming",
  obsStreamStop: "Stop Streaming",
  obsStreamToggle: "Toggle Streaming"
};
