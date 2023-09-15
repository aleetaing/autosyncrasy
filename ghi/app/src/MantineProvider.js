import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import App from './App';



// Custom theme is applied to all components in App
function Demo() {
    return (
        <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
            <Notifications />
            <App />
        </MantineProvider>
    );
}
