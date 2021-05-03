class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame);
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelectorAll('.score span.result');
        this.spanGames = document.querySelectorAll('.score span.number');
        this.spanWins = document.querySelectorAll('.score span.win');
        this.spanLosses = document.querySelectorAll('.score span.loss');

        this.render()
    }

    render(colors = ["grey", "grey", "grey"],money = this.wallet.getWalletValue(),stats = [0,0,0], result = "", bid = 0, wonMoney = 0) {

        this.boards.forEach((board, index) =>{
            board.style.backgroundColor = colors[index];
        
        })

        if(result){
            result = `Wygrałeś ${wonMoney}`
        }else if (!result && result != "") {
            result = `Przegrałeś ${bid}`
        }
        this.spanResult.textContent = result;
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[0];
        this.spanLosses.textContent = stats[0];
    }

    startGame() {

    }
}
