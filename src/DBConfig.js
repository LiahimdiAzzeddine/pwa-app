export const DBConfig = {
    name: "DinomiteDB",
    version: 1,
    objectStoresMeta: [
      {
        store: "people",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "name", keypath: "name", options: { unique: false } },
          { name: "email", keypath: "email", options: { unique: false } },
        ],
      },
    ],
  };