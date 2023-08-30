import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "4yflsvhc",
  dataset: "production",
  apiVersion: "2023-08-29",
  useCdn: false,
};

const client = createClient(config);

export default client;

// let date=new Date
// console.log(date.getFullYear()+"-"+date.getMonth())

// ga8lllhf

// 4yflsvhc