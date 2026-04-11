import Layout from "../Layout";
import ConfettiStore from "../stores/ConfettiStore";
import { Table } from '@mantine/core';

function ZustandDemo() {
    const mode = ConfettiStore((state: any) => state.mode);
    const particleCount = ConfettiStore((state: any) => state.particleCount);
    const shapeSize = ConfettiStore((state: any) => state.shapeSize);
    const spreadDeg = ConfettiStore((state: any) => state.spreadDeg);
    const fadeOutHeight = ConfettiStore((state: any) => state.fadeOutHeight);
    const setMode = ConfettiStore((state: any) => state.setMode);


    function DropdownMode(){
        return (
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="fall">fall</option>
                <option value="boom">boom</option>
            </select>

        )
    }

    function TextEditParticleCount(){
        return(
            <input type="number" value={particleCount} onChange={(e) => ConfettiStore.setState({ particleCount: parseInt(e.target.value) })} />
        )
    }

    function TextEditShapeSize(){
        return(
            <input type="number" value={shapeSize} onChange={(e) => ConfettiStore.setState({ shapeSize: parseInt(e.target.value) })} />
        )
    }

    function TextEditSpreadDeg(){
        return(
            <input type="number" value={spreadDeg} onChange={(e) => ConfettiStore.setState({ spreadDeg: parseInt(e.target.value) })} />
        )
    }

    function TextEditFadeOutHeight(){
        return(
            <input type="number" value={fadeOutHeight} onChange={(e) => ConfettiStore.setState({ fadeOutHeight: parseFloat(e.target.value) })} />
        )
    }

    const tableValue = [
        { parameter: "mode", description: "the mode of the confetti", value: <DropdownMode /> },
        { parameter: "particleCount", description: "the number of particles", value: <TextEditParticleCount /> },
        { parameter: "shapeSize", description: "the size of the confetti shape", value: <TextEditShapeSize /> },
        { parameter: "spreadDeg", description: "the spread angle of the confetti", value: <TextEditSpreadDeg /> },
        { parameter: "fadeOutHeight", description: "the height at which the confetti will start to fade out", value: <TextEditFadeOutHeight /> },
    ];

    return (
        <Layout>
            <h1>Zustand Demo</h1>
            <p>This page showcase simple Zustand demo</p>
            <p>To convey the idea <i>"no state passing thru props"</i> :</p>
            <ul>
                <li>Config is in this page</li>
                <li>Changes happened in Confetti Demo page</li>
            </ul>
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
export default ZustandDemo;