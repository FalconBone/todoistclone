let data = [
    {
        id: 0,
        name: 'Дом',
        color: '#B8B8B8',
        taskIdCounter: 6,
        chapterIdCounter: 3,
        isTaskCreating: false,
        chapters: [
            {
                id: 0,
                name: null,

                isClosed: false,
                isAddingTask: false,
                isHiddenAddingTask: false,
                isAddingChapter: false,
                isHiddenAddingChapter: false,

                tasks: [
                    {
                        id: 0,
                        name: 'Изучение сайта todo',
                        description: 'потыкать кнопачки',
                        priory: 1,
                    },
                    {
                        id: 1,
                        name: 'Выставление оценки "Отлично"',
                        date: 'Сегодня',
                        priory: 2,
                    }
                ]
            },
            {
                id: 1,
                name: 'Рутины',

                isClosed: false,
                isAddingTask: false,
                isHiddenAddingTask: false,
                isAddingChapter: false,
                isHiddenAddingChapter: false,
                
                tasks: [
                    {
                        id: 0,
                        name: 'Пропылесосить все команты',
                        priory: 3,
                    },
                    {
                        id: 1,
                        name: 'Еженедельный обзор задач и целей',
                        priory: 4,
                    }
                ] 
            },
            {
                id: 2,
                name: 'Отдых',

                isClosed: false,
                isAddingTask: false,
                isHiddenAddingTask: false,
                isAddingChapter: false,
                isHiddenAddingChapter: false,

                tasks: [
                    {
                        id: 0,
                        name: 'Посмотреть сериал',
                        priory: 1,
                    },
                    {
                        id: 1,
                        name: 'Поиграть в компьютер',
                        priory: 1,
                    }
                ] 
            }
        ]
    },
    {
        id: 1,
        name: 'Работа',
        color: '#B8B8B8',
        taskIdCounter: 4,
        chapterIdCounter: 2,
        isTaskCreating: false,
        chapters: [
            {
                id: 0,
                name: null,

                isClosed: false,
                isAddingTask: false,
                isHiddenAddingTask: false,
                isAddingChapter: false,
                isHiddenAddingChapter: false,

                tasks: [
                    {
                        id: 0,
                        name: 'Пропылесосить все команты',
                        priory: 4,
                    },
                    {
                        id: 1,
                        name: 'Еженедельный обзор задач и целей',
                        priory: 4,
                    }
                ] 
            },
            {
                id: 1,
                name: 'Лабы',

                isClosed: false,
                isAddingTask: false,
                isHiddenAddingTask: false,
                isAddingChapter: false,
                isHiddenAddingChapter: false,

                tasks: [
                    {
                        id: 0,
                        name: 'Посмотреть сериал',
                        priory: 4,
                    },
                    {
                        id: 1,
                        name: 'Поиграть в компьютер',
                        priory: 3,
                    }
                ] 
            }
        ]
    }
];

export default data
