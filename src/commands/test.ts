import { ApplicationCommandTypes, InteractionResponseTypes} from '../../deps.ts'
import { ComponentsBuilder } from '../utils/builders/component.ts'
import { createCommand } from './mod.ts'
import Overwatch from "https://esm.sh/gh/Sipixer/overfast-api-client";

createCommand({
    name: 'test',
    description: 'Just a Testing Command',
    type: ApplicationCommandTypes.ChatInput,
    execute: async (Bot, interaction) => {

        const button2 = new ComponentsBuilder().button('test', 'Primary', 'buttonTest', {emoji: '😁'})

        await Bot.helpers.sendInteractionResponse(interaction.id, interaction.token, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
                components: button2,
                content: `Hello from the other side`,
            },
        })
    },
})