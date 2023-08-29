import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "4yflsvhc",
  dataset: "production",
  apiVersion: "2023-08-28",
  useCdn: false,
};

const client = createClient(config);

export default client;


// ga8lllhf

// 4yflsvhc