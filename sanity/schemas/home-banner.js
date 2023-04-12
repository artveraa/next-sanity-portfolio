const homeBanner = {
    name: 'homeBanner',
    type: 'document',
    title: 'Home Banner',
    fields: [
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'prenom',
            type: 'string',
            title: 'Prénom',
        },
        {
            name: 'nom',
            type: 'string',
            title: 'Nom',
        },
        {
            name: 'introduction',
            type: 'array',
            title: 'Introduction',
            of: [
                {
                    type: 'block',
                }
            ],
        },
        {
            name: 'job1',
            type: 'string',
            title: 'Job 1',
        },
        {
            name: 'job2',
            type: 'string',
            title: 'Job 2',
        }
    ]
}

export default homeBanner