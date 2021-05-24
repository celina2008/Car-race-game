class Form{
    constructor(){
        
    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(460,100)
        
        var input=createInput('Name')
        input.position(460,200)

        var button=createButton("Play")
        button.position(460,300)

        var greeting=createElement("h3")

        button.mousePressed(function(){
            input.hide()
            button.hide()
            
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html('Greetings!'+name)
            greeting.position(460,250)
            
        })
    }

}