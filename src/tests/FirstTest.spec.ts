import { User } from '@models/Films'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Hiago'

  expect(user.name).toEqual('Hiago')
})
