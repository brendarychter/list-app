import React from 'react';

export default async function fetchData(url, params) {
    try {
        const response = await fetch(url, params);
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}