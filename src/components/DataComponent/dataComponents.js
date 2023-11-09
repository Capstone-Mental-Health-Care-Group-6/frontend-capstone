import { book, businesCentre, chat, flame, houseFill, love, pending, periority, person, phone, repeat, vidioCall } from "../../../image"


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

