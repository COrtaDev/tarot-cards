from .tarot_card import TarotCard
from .helper import major, names
import wikipedia


class Deck():
    def __init__(self):
        self.cards = []

    # def getMinorImgUrls(self):
    #     return wikipedia.WikipediaPage('Minor Arcana').images

    def makeName(self, suits, suit):
        return [{'name': f"{s[1]} of {suit}", 'suit': suit.lower(), 'img': s[0],
                 'api_endpoint': f"{s[1]}_of_{suit}"} for s in suits]

    def makeSuits(self):
        urls = wikipedia.WikipediaPage('Minor Arcana').images
        return [self.makeName(list(zip([url for url in urls if url.rfind(
            'Wands') > 0], names)), 'Wands'),
            self.makeName(list(zip([url for url in urls if url.rfind(
                'Pents') > 0], names)), 'Coins'),
            self.makeName(list(zip([url for url in urls if url.rfind(
                'Cups') > 0], names)), 'Cups'),
            self.makeName(list(zip([url for url in urls if url.rfind(
                'Swords') > 0], names)), 'Swords')]

    def getApiEndpoint(self, name):
        return self.handleName(name)

    def handleName(self, name):
        return f"{name.replace(' ', '_')}_(Tarot_card)"

    def getMinorCardData(self):
        suits = self.makeSuits()
        return [TarotCard(card['name'], card['suit'], card['img'],
                          card['api_endpoint'], 'minor')
                for suit in suits for card in suit]
        # img_urls = wikipedia.WikipediaPage('Minor Arcana').images
        #     [
        #     makeName(
        #         list(zip([url for url in img_urls if url.rfind(
        #             'Wands') > 0], names)), 'Wands'),
        #     makeName(list(zip([url for url in img_urls if url.rfind(
        #         'Pents') > 0], names)), 'Coins'),
        #     makeName(list(zip([url for url in img_urls if url.rfind(
        #         'Cups') > 0], names)), 'Cups'),
        #     makeName(list(zip([url for url in img_urls if url.rfind(
        #         'Swords') > 0], names)), 'Swords'), ]

    def getMajorImgUrls(self):
        urls = wikipedia.WikipediaPage(self.).images
        return [url for url in urls if '/RWS' in url]

    def getMajorCardData(self):
      # iterate throught the helper and make the cards for the deck
        # major_arcana = [TarotCard(card['name'], 'trump', "",
        #                           "", 'major') for card in major]
        return [TarotCard(card['name'], 'trump', self.getApiEndpoint(card['name']), "", 'major') for card in major]

        # return self.nameApiEndpoint(major)
        # for card in deck:
        #     card['api_endpoint'] = card['name'].replace(
        #         ' ', '_') + '_(Tarot_card)'
        # urls = wikipedia.WikipediaPage(card['api_endpoint']).images
        # for url in urls:
        #     if '/RWS' in url:
        #         card['img'] = url
        # return deck

    def generateMinorArcana(self):
        return self.getCardMinorData()

    def generateMajorArcana(self):
      # make the apiendpoints and add them
      # add the img urls
      # return the objs
        return self.getMajorCardData()


# Here we make the cards array and make objects out of it.
# cards = getCardData(major)
# Now that we have and array of cards, we can make a
# tarot card object for each one:
major_arcana = [TarotCard(card['name'], 'trump', card['img'],
                          card['api_endpoint'], 'major') for card in cards]
