import Layout from "../Layout";
import Confetti from 'react-confetti-boom';
import ConfettiStore from "../stores/ConfettiStore";
import { Table } from '@mantine/core';

function ConfettiDemo() {
    const mode = ConfettiStore((state: any) => state.mode);
    const particleCount = ConfettiStore((state: any) => state.particleCount);
    const shapeSize = ConfettiStore((state: any) => state.shapeSize);
    const spreadDeg = ConfettiStore((state: any) => state.spreadDeg);
    const fadeOutHeight = ConfettiStore((state: any) => state.fadeOutHeight);


    const tableValue = [
        { parameter: "mode", description: "the mode of the confetti", value: mode },
        { parameter: "particleCount", description: "the number of particles", value: particleCount },
        { parameter: "shapeSize", description: "the size of the confetti shape", value: shapeSize },
        { parameter: "spreadDeg", description: "the spread angle of the confetti", value: spreadDeg },
        { parameter: "fadeOutHeight", description: "the height at which the confetti will start to fade out", value: fadeOutHeight },
    ];

    return (

        <Layout>
            <h1>Confetti Demo</h1>
            <p>This is a demo of the confetti component. Change the options in Zustand Demo page</p>
            <Confetti
                mode={mode}
                particleCount={particleCount}
                shapeSize={shapeSize}
                spreadDeg={spreadDeg}
                fadeOutHeight={fadeOutHeight}
            />
            <h3>Parameters</h3>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Parameter</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Value</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        tableValue.map((row) => (
                            <Table.Tr key={row.parameter}>
                                <Table.Td>{row.parameter}</Table.Td>
                                <Table.Td>{row.description}</Table.Td>
                                <Table.Td>{row.value}</Table.Td>
                            </Table.Tr>
                        ))
                    }
                </Table.Tbody>
            </Table>
        </Layout>
    )
}
export default ConfettiDemo;