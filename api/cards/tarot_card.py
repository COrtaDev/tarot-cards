class TarotCard:
    def __init__(self, name, suit, img, api_endpoint, deck):
        self.name = name
        self.suit = suit
        self.img = img
        self.api_endpoint = api_endpoint
        self.deck = deck

    @property
    def name(self):
        return self._name

    @property
    def suit(self):
        return self._suit

    @property
    def img(self):
        return self._img

    @property
    def api_endpoint(self)
    return self._api_endpoint

    @property
    def deck(self):
        return self._deck

    # @img.setter
    # def img(self, img, suit, name)
    #     # img_urls = wikipedia.WikipediaPage('Minor Arcana').images
    #     # for url in img_urls:
    #     #     if url.find
    #     #     url = img_url.rfind(self.suit)
    # def getCardData(self):
    #     img_urls = wikipedia.WikipediaPage('Minor Arcana').images
    #     suits = [
    #         makeName(
    #             list(zip([url for url in img_urls if url.rfind(
    #                 'Wands') > 0], names)), 'Wands'),
    #         makeName(list(zip([url for url in img_urls if url.rfind(
    #             'Pents') > 0], names)), 'Coins'),
    #         makeName(list(zip([url for url in img_urls if url.rfind(
    #             'Cups') > 0], names)), 'Cups'),
    #         makeName(list(zip([url for url in img_urls if url.rfind(
    #             'Swords') > 0], names)), 'Swords'), ]
    #     return [TarotCard(card['name'], card['suit'], card['img'],
    #                       card['api_endpoint'], 'minor')
    #             for suit in suits for card in suit]

    # def makeName(self, suits, suit):
    #     return [{'name': f"{s[1]} of {suit}", 'suit': suit.lower(), 'img': s[0],
    #              'api_endpoint': f"{s[1]}_of_{suit}"} for s in suits]

    # def generateMinorArcana(self):
    #     minor_arcana = self.getCardData()
    #     return minor_arcana
