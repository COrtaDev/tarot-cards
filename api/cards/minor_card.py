# minor_card.py
"""Card class that represents a card from the Minor Arcana."""
from .card import Card


class MinorCard(Card):
    NAMES = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
             "Nine", "Ten", "Page", "Knight", "Queen", "King"]
    SUITS = ["Wands", "Coins", "Cups", "Swords"]

    def __init__(self, name, deck, suit, img):
        super().__init__(deck)
        self._name = name
        self._suit = suit
        self._img = img
