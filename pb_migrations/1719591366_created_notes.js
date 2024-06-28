/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: '5m8m535m46lvnc3',
      created: '2024-06-28 16:16:06.615Z',
      updated: '2024-06-28 16:16:06.615Z',
      name: 'notes',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'ixu79zor',
          name: 'title',
          type: 'text',
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
      ],
      indexes: [],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('5m8m535m46lvnc3');

    return dao.deleteCollection(collection);
  }
);
