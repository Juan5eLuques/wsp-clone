const contacts = [
    {
        id: 1,
        name: 'Yoda',
        last_time_connection: 'Hace 2 horas',
        profile_picture: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&webp=true&resize=800,534',
        messages: [
            {
                id: 1,
                text: 'Hola, como estas?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Bien yo estoy, gracias por preguntar',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Necesito que me ayudes con algo',
                send_by_me: true,
                created_at: '2024-06-01T12:10:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Ayudarte puedo, joven padawan',
                send_by_me: false,
                created_at: '2024-06-01T12:12:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Quiero aprender a usar la fuerza',
                send_by_me: true,
                created_at: '2024-06-01T12:15:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Paciencia debes tener, mi joven aprendiz',
                send_by_me: false,
                created_at: '2024-06-01T12:18:00Z',
                is_read: false
            },
            {
                id: 7,
                text: 'Hola',
                send_by_me: true,
                created_at: '2024-06-01T12:20:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 2,
        name: 'Pepe',
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            {
                id: 1,
                text: 'Holaaa',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Todo bien? Hace rato no hablamos',
                send_by_me: true,
                created_at: '2024-06-01T12:01:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Hola! Si, todo tranqui por aca',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Vamos a jugar al futbol el sabado?',
                send_by_me: false,
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Dale, a que hora?',
                send_by_me: true,
                created_at: '2024-06-01T12:10:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'A las 5 en la cancha de siempre',
                send_by_me: false,
                created_at: '2024-06-01T12:12:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: 'Mamá',
        last_time_connection: 'En línea',
        profile_picture: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
        messages: [
            {
                id: 1,
                text: 'Hijo, ya comiste?',
                send_by_me: false,
                created_at: '2024-06-02T09:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Si ma, recién almorcé',
                send_by_me: true,
                created_at: '2024-06-02T09:30:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Que comiste?',
                send_by_me: false,
                created_at: '2024-06-02T09:31:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Milanesas con puré',
                send_by_me: true,
                created_at: '2024-06-02T09:35:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Que rico! El domingo venite a comer a casa',
                send_by_me: false,
                created_at: '2024-06-02T09:36:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Dale, ahí voy!',
                send_by_me: true,
                created_at: '2024-06-02T09:40:00Z',
                is_read: true
            },
            {
                id: 7,
                text: 'Traé postre 🍰',
                send_by_me: false,
                created_at: '2024-06-02T09:41:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 4,
        name: 'Grupo Trabajo',
        last_time_connection: 'Hace 30 min',
        profile_picture: 'https://cdn-icons-png.flaticon.com/512/681/681494.png',
        messages: [
            {
                id: 1,
                text: 'Buenos días equipo!',
                send_by_me: false,
                created_at: '2024-06-03T08:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Buen día! Cómo va el proyecto?',
                send_by_me: true,
                created_at: '2024-06-03T08:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Avanzando bien, ya terminé el módulo de login',
                send_by_me: false,
                created_at: '2024-06-03T08:10:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Genial! Yo estoy con la parte del dashboard',
                send_by_me: true,
                created_at: '2024-06-03T08:15:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'La reunión de hoy se pasa a las 3pm',
                send_by_me: false,
                created_at: '2024-06-03T10:00:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Ok, anotado 👍',
                send_by_me: true,
                created_at: '2024-06-03T10:02:00Z',
                is_read: true
            },
            {
                id: 7,
                text: 'Alguien puede revisar mi PR?',
                send_by_me: false,
                created_at: '2024-06-03T14:00:00Z',
                is_read: false
            },
            {
                id: 8,
                text: 'Yo lo reviso en un rato',
                send_by_me: true,
                created_at: '2024-06-03T14:05:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 5,
        name: 'Ana García',
        last_time_connection: 'Ayer',
        profile_picture: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        messages: [
            {
                id: 1,
                text: 'Hola! Viste la serie que te recomendé?',
                send_by_me: false,
                created_at: '2024-06-01T20:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Siii, está buenísima! Ya voy por el capítulo 5',
                send_by_me: true,
                created_at: '2024-06-01T20:10:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'No te voy a spoilear pero el final es increíble',
                send_by_me: false,
                created_at: '2024-06-01T20:12:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Jajaja no me digas nada! 🤐',
                send_by_me: true,
                created_at: '2024-06-01T20:15:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Tranqui, mis labios están sellados 🤫',
                send_by_me: false,
                created_at: '2024-06-01T20:16:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        name: 'Carlos Futbol',
        last_time_connection: 'Hace 1 hora',
        profile_picture: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        messages: [
            {
                id: 1,
                text: 'Viste el partido de ayer?',
                send_by_me: true,
                created_at: '2024-06-02T10:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Siii tremendo golazo el del 10',
                send_by_me: false,
                created_at: '2024-06-02T10:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'El arquero no pudo hacer nada jaja',
                send_by_me: true,
                created_at: '2024-06-02T10:07:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Este fin de semana hay clásico, vamos a verlo?',
                send_by_me: false,
                created_at: '2024-06-02T10:10:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 7,
        name: 'Lucía',
        last_time_connection: 'Hace 5 horas',
        profile_picture: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png',
        messages: [
            {
                id: 1,
                text: 'Te paso la dirección del restaurant',
                send_by_me: false,
                created_at: '2024-06-03T18:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Dale, pasame',
                send_by_me: true,
                created_at: '2024-06-03T18:01:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Av. Corrientes 1234, CABA',
                send_by_me: false,
                created_at: '2024-06-03T18:02:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Reservé mesa para las 21hs',
                send_by_me: false,
                created_at: '2024-06-03T18:03:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Perfecto! Nos vemos ahí 🍕',
                send_by_me: true,
                created_at: '2024-06-03T18:05:00Z',
                is_read: true
            }
        ]
    },
    {
        id: 8,
        name: 'Martín',
        last_time_connection: 'Hace 10 min',
        profile_picture: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
        messages: [
            {
                id: 1,
                text: 'Che, me prestás los apuntes de la clase?',
                send_by_me: false,
                created_at: '2024-06-04T11:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Si, te los paso por drive',
                send_by_me: true,
                created_at: '2024-06-04T11:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Groso! Gracias 🙏',
                send_by_me: false,
                created_at: '2024-06-04T11:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Ahí te compartí la carpeta',
                send_by_me: true,
                created_at: '2024-06-04T11:15:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'Ya lo vi, está todo clarisimo',
                send_by_me: false,
                created_at: '2024-06-04T11:20:00Z',
                is_read: true
            },
            {
                id: 6,
                text: 'Nos juntamos a estudiar mañana?',
                send_by_me: false,
                created_at: '2024-06-04T11:25:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts