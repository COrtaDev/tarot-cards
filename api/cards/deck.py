from .tarot_card import TarotCard
from .helper import major, names
import wikipedia


class Deck():
    def __init__(self):

    def getMinorCardData(self):
        img_urls = wikipedia.WikipediaPage('Minor Arcana').images
        suits = [
            makeName(
                list(zip([url for url in img_urls if url.rfind(
                    'Wands') > 0], names)), 'Wands'),
            makeName(list(zip([url for url in img_urls if url.rfind(
                'Pents') > 0], names)), 'Coins'),
            makeName(list(zip([url for url in img_urls if url.rfind(
                'Cups') > 0], names)), 'Cups'),
            makeName(list(zip([url for url in img_urls if url.rfind(
                'Swords') > 0], names)), 'Swords'), ]
        return [TarotCard(card['name'], card['suit'], card['img'],
                          card['api_endpoint'], 'minor')
                for suit in suits for card in suit]

    def makeName(self, suits, suit):
        return [{'name': f"{s[1]} of {suit}", 'suit': suit.lower(), 'img': s[0],
                 'api_endpoint': f"{s[1]}_of_{suit}"} for s in suits]

    def generateMinorArcana(self):
        return self.getCardMinorData()

    def getMajorCardData(deck):
        for card in deck:
            card['api_endpoint'] = card['name'].replace(
                ' ', '_') + '_(Tarot_card)'
            urls = wikipedia.WikipediaPage(card['api_endpoint']).images
            for url in urls:
                if '/RWS' in url:
                    card['img'] = url
        return deck

    def generateMajorArcana(self):
      return self.getMajorCardData(major)
# Here we make the cards array and make objects out of it.
# cards = getCardData(major)
# Now that we have and array of cards, we can make a
# tarot card object for each one:
major_arcana = [TarotCard(card['name'], 'trump', card['img'],
                          card['api_endpoint'], 'major') for card in cards]
