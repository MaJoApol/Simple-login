import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"


export default function login(){

    console.log("a")
    return(
        <Card className="w-full p-5">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start w-96">  {/*Aqui dentro vem o formulário */}
                <Label htmlFor="email">E-mail</Label>
                <Input title="E-mail" type="email" className="mb-5"/>

                <Label htmlFor="text">Nome</Label>
                <Input title="Nome" type="text"  className="mb-5"/>

                <Label htmlFor="password">Senha</Label>
                <Input title="Senha" type="password"  className="mb-5"/>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button>Entrar</Button> 
            </CardFooter>
        </Card>
    )
}