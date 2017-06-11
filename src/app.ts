import * as restify from 'restify'
import createDebug from 'debug'
import { ChatConnector, Middleware, UniversalBot } from 'botbuilder'
const log = createDebug('bot:app')
const server = restify.createServer()

// --- Create
const connector = new ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

server.listen(3978, () => {
  log('%s listening to %s', server.name, server.url)
})

server.post('/api/messages', connector.listen())

export default async function bootstrap() {
  const bot = new UniversalBot(connector)
  bot.dialog('/', (session) => {
    session.endDialog('Hog nghe, hog hiểu, lỡ có hiểu cũng hog trả lời!')
  })

  bot.dialog('greetings', (session) => {
    session.endDialog('Chào bạn. Mình là Tào Lao. Mình có thể giúp gì bạn không?')
  })
  .triggerAction({
    matches: /(chào|hello|hi)/i
  })

}
