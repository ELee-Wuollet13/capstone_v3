import { LOAD_SUITS, ADD_SUIT, MODIFY_SUIT, DELETE_SUIT } from '../actions/actionTypes'

export function loadSuits(suits) {
  return { type: LOAD_SUITS, suits: suits }
}

export function addSuit(id, title) {
  return { type: ADD_SUIT, id: id, title: title }
}

export function modifySuit(index) {
  return { type: MODIFY_SUIT, index: index }
}

export function deleteSuit(index) {
  return { type: DELETE_SUIT, index: index }
}
