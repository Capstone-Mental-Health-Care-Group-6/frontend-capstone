import {
    book, businesCentre, chat, doctor1, doctor2, doctor3, flame,
    houseFill, love, pending, periority, person, phone, repeat, vidioCall, vidio, garuda, shopie, alterra
} from "../../../image"


export const services = [
    {
        title: 'CHAT',
        Image: chat,
        text: 'Sesi konseling melalui dengan Psikolog',
        metode: 'Metode Chat'
    },
    {
        title: 'CALL',
        Image: phone,
        text: 'Sesi konseling melalui dengan Psikolog',
        metode: 'Metode Call'
    },
    {
        title: 'VIDIO CALL',
        Image: vidioCall,
        text: 'Sesi konseling melalui dengan Psikolog',
        metode: 'Metode vidio Call'
    }
]

export const conselorsButton = [
    {
        text: 'Kendali Emosi',
        image: flame

    },
    {
        text: 'Kesepian',
        image: person

    },
    {
        text: 'Kecemasan',
        image: periority

    },
    {
        text: 'Pekerjaan',
        image: businesCentre

    },
    {
        text: 'Pendidikan',
        image: book

    },
    {
        text: 'Keluarga',
        image: houseFill

    },
    {
        text: 'Percintaan',
        image: love

    },
    {
        text: 'Social',
        image: person

    },
    {
        text: 'Kecanduan',
        image: repeat

    },
    {
        text: 'Lainnya',
        image: pending

    },
]

export const conselors = [
    {
        name: 'Charlie Philips, M.Psi.',
        specialist: 'Psikolog Klinis | Spesialis Keluarga',
        image: doctor1
    },
    {
        name: 'Miracle Culhane, S.Psi.',
        specialist: 'Konselor | Spesialis Hubungan Interpersonal',
        image: doctor2
    },
    {
        name: 'Maria Mango, S. Psi.',
        specialist: 'Psikolog | Spesialis Menejemen Stress dan Emosi',
        image: doctor3
    },
]

export const sponsors = [
    {
        image: alterra
    },
    {
        image: vidio
    },
    {
        image: garuda
    },
    {
        image: shopie
    },
]