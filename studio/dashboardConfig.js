export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603518524934da2738810fc0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9nmt8art',
                  apiId: '224213c2-9190-483d-a55c-0294d8a74d75'
                },
                {
                  buildHookId: '60351852b8b2f12565d41e2a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y8utq4tt',
                  apiId: 'cb514d25-a94b-4ba3-83d0-2f12ba55b1a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/normancapule/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y8utq4tt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
