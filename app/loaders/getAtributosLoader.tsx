import { json, LoaderFunctionArgs } from "@remix-run/node";

export const getAtributosLoader = async ({ params }: LoaderFunctionArgs) => {
    const { idVista, idMenu } = params;
    try {
        const response = await fetch(`https://apptesting.leiten.dnscheck.com.ar/ContentSettings/GetAtributos?IdVista=${idVista}&Id=${idMenu}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '12345'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return json({ data });

    } catch (error) {
        console.error('Error fetching URL:', error);
        return json({ error: 'Failed to fetch data' }, { status: 500 });
    }
};