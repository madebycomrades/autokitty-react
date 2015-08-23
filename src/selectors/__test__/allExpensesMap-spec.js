import selector from '../allExpensesMap'

describe('allExpensesMap selector', () => {

  it('combines all expenses into a single map', () => {
    const state = {
      project: {
        members: [
          {expenses: [{slug: 1}, {slug: 2}]},
          {expenses: [{slug: 3}, {slug: 4}]}
        ]
      }
    }
    expect([...selector(state)]).toEqual([
      [1, {slug: 1}],
      [2, {slug: 2}],
      [3, {slug: 3}],
      [4, {slug: 4}]
    ])
  })

  it('handles a project with no members', () => {
    const state = {
      project: {members: []}
    }
    expect([...selector(state)]).toEqual([])
  })
})
