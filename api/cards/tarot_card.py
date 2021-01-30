class TarotCard:
    def __init__(self, name='', suit='', img='', api_endpoint='', deck=''):
        self._name = name
        self._suit = suit
        self._img = img
        self._api_endpoint = api_endpoint
        self._deck = deck

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        return self.name

    @property
    def suit(self):
        return self._suit

    @suit.setter
    def suit(self, suit):
        return self.suit

    @property
    def img(self):
        return self._img

    @img.setter
    def img(self, img):
        return self.img

    @property
    def api_endpoint(self):
        return self._api_endpoint

    @api_endpoint.setter
    def api_endpoint(self, api_endpoint):
        return self.api_endpoint

    @property
    def deck(self):
        return self._deck

    @deck.setter
    def deck(self, deck):
        return self.deck

    def getImgUrl(self, api_endpoint):
        

    def __repr__(self):
        return (f"TarotCard(name: {self.name}, suit: {self.suit}, img: {self.img}, api_endpoint: {self.api_endpoint}, deck: {self.deck})")

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
