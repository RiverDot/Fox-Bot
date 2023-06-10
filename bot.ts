import { configs } from './configs.ts'
import type { BotWithCache, BotWithHelpersPlugin } from './deps.ts'
import {
    Collection,
    createBot,
    enableCachePlugin,
    enableCacheSweepers,
    enableHelpersPlugin,
    enablePermissionsPlugin,
    GatewayIntents,
} from './deps.ts'
import type { Command } from './src/types/commands.ts'

// MAKE THE BASIC BOT OBJECT
const bot = createBot({
    token: configs.token,
    botId: configs.botId,
    intents: GatewayIntents.Guilds,
    events: {},
})

// ENABLE ALL THE PLUGINS THAT WILL HELP MAKE IT EASIER TO CODE YOUR BOT
enableHelpersPlugin(bot)
enableCachePlugin(bot)
enableCacheSweepers(bot as BotWithCache)
enablePermissionsPlugin(bot as BotWithCache)

export interface BotClient extends BotWithCache<BotWithHelpersPlugin> {
    commands: Collection<string, Command>
}

// THIS IS THE BOT YOU WANT TO USE EVERYWHERE IN YOUR CODE! IT HAS EVERYTHING BUILT INTO IT!
export const Bot = bot as BotClient
// PREPARE COMMANDS HOLDER
Bot.commands = new Collection()