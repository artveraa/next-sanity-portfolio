const skills = {
    "name": "skills",
    "title": "Compétences",
    "type": "document",
    "fields": [
        {
            "name": "introduction",
            "title": "Introduction",
            "type": "array",
            "of": [
                {
                    "type": "block"
                }
            ]
        },
        {
            "name": "skills",
            "title": "Compétences",
            "type": "array",
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "name": "title",
                            "title": "Titre",
                            "type": "string"
                        },
                        {
                            "name": "description",
                            "title": "Description",
                            "type": "array",
                            "of": [
                                {
                                    "type": "block"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default skills;