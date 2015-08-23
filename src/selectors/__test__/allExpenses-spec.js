import selector from '../allExpenses'

describe('allExpenses selector', () => {

  it('combines all expenses into a single array', () => {
    const state = {
      project: {
        members: [
          {expenses: [1,2]},
          {expenses: [3,4]}
        ]
      }
    }
    expect(selector(state)).toEqual([1,2,3,4])
  })

  it('handles a project with no members', () => {
    const state = {
      project: {members: []}
    }
    expect(selector(state)).toEqual([])
  })
})
