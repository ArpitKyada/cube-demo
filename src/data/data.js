export const VALUE_DATA = {
  input: {
    id: {
      guid: "09e19d70-5b4d-4f5b-929a-ac2c7dd7b75a",
      name: "Some input name",
    },
    description: "Some input description",
    structures: [
      {
        id: {
          guid: "dc861c82-1696-4889-8dbe-33cd11d55a53",
          name: "Some structure name",
        },
        description: "Some structure description",
        elements: [
          {
            id: {
              guid: "c8f47d0e-dd86-4a6d-ac7c-d0d84003122a",
              name: "Some element name",
            },
            geometry: {
              height: 1,
              "cross-section": {
                rectangle: {
                  width: 2,
                  length: 2,
                },
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    elementResults: [
      {
        elemGuid: "c8f47d0e-dd86-4a6d-ac7c-d0d84003122a",
        result: {
          positions: [
            {
              distance: 0,
              foundation: {
                volume: "4",
              },
            },
          ],
        },
      },
    ],
  },
};
