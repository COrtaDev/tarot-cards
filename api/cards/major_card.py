# major_card.py
"""Card class that represents a card from the Major Arcana."""
from .card import Card


class MajorCard(Card):
    NAMES = ["The Fool", "The Magician", "The High Priestess",
             "The Empress", "The Emperor", "The Hierophant", "The Lovers",
             "The Chariot", "Justice", "The Hermit", "Wheel of Fortune",
             "Strength", "The Hanged Man", "Death", "Temperance", "The Devil",
             "The Tower", "The Star", "The Moon", "The Sun", "Judgement",  "The World"]

    def __init__(self, name, deck, suit, img):
        super().__init__(deck)
        self._name = name
        self._suit = 'trump'
        self._img = img
