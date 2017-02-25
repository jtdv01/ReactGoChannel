package main

import (
    "encoding/json"
    "fmt"
    "github.com/mitchellh/mapstructure"
)

// Empty interface, all types implement this
// WARNING: capitalization in Go means its a public variable
// But it can be added as a metadata `json:"name"`
type Message struct{
    Name string `json:"name"`
    Data interface{} `json:"data"`
}

type Channel struct{
    Id string `json:"id"`
    Name string `json:"name"`
}

// type Speaker interface {
//     Speak()
// }

// func (m Message) Speak() {
//     fmt.Println("I'm a " + m.Name + " event !")
// }

func main(){
    recRawMsg := []byte(`{"name": "channel add",`+
    `"data":{"name": "Hardware Support"}}`)

    // Convert the string of byes. Unmarshall it to a type and save it to &recMessage of type Message 
    var recMessage Message
    err := json.Unmarshal(recRawMsg, &recMessage)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Printf("%#v\n", recMessage)

    if recMessage.Name == "channel add" {
        channel, err := addChannel(recMessage.Data)
        var sendMessage Message
        sendMessage.Name = "channel add"
        sendMessage.Data = channel
        sendRawMsg, err := json.Marshal(sendMessage)
        if err != nil {
            fmt.Println(err)
            return 
        }

        fmt.Printf(string(sendRawMsg))
    }
}

func addChannel(data interface{}) (Channel, error) {
    var channel Channel

    // The type assertions can now be made by michell's package
    // channelMap := data.(map[string]interface{})
    // channel.Name = channelMap["name"].(string)

    err := mapstructure.Decode(data, &channel)
    if err != nil {
         return channel, err
    }

    channel.Id = "1"
    fmt.Printf("%#v\n", channel) 
    return channel,nil
}