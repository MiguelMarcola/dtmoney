import { Sumary } from "../Sumary";
import { TranscritionsTable } from "../TranscritionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TranscritionsTable />
        </Container>
    );
}