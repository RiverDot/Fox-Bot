import { ApplicationCommandTypes, InteractionResponseTypes} from '../../deps.ts'
import { createCommand } from './mod.ts'
import Overwatch from "https://esm.sh/gh/Sipixer/overfast-api-client";

createCommand({
    name: 'test',
    description: 'Just a Testing Command',
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {


        const button2 = new Components()
            .setType(2)
            .setStyle(4)
            .setLabel("DO NOT CLICK")
            .setCustomId("12345");


        await Bot.helpers.sendInteractionResponse(interaction.id, interaction.token, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                components: [button2],
                content: ``,
            },
        })
    },
})