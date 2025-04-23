import Mixpanel from "mixpanel";

const mixpanelEvent = Mixpanel.init("ffc4d608d18a9ee0e6599ede115d4c8c");

export function trackServerEvent(eventName: string, properties: any) {
  if (process.env.NODE_ENV === "development") return;
  mixpanelEvent.track(eventName, properties);
}
