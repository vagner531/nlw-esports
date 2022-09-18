import express from 'express'

import cors from 'cors'

import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express()

app.use(express.json())

app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(games);
});

app.post('/games/:id/ads', async (request, response) => {

    const gameId = request.params.id;
    const body: any = request.body;

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekdays: body.weekdays.join(','),
            hoursStart: convertHourStringToMinutes(body.hoursStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return response.status(201).json(ad);
});

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekdays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hoursStart: true,
            hourEnd: true,

        },
        where: {
            gameId,
        },
        orderBy: {
            createAt: 'desc'
        }

    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekdays: ad.weekdays.split(','),
            hoursStart: convertMinutesToHourString(ad.hoursStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId
        }
    })

    return response.json({
        discord: ad.discord,
    })
})

app.listen(3333)