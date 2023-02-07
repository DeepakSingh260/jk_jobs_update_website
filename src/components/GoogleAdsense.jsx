import styled from 'styled-components';

import { useEffect } from 'react';

export function GoogleAdsenseContainer({ client, slot }) {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    const AdLabel = styled.span`
    font-size: 12px;
  `

    return (
        <div
            style={{ textAlign: 'left', overflow: 'hidden' }}
        >
            <AdLabel>Advertisment</AdLabel>
            <ins
                className="adsbygoogle"
                style={{ display: "block", border: '1px solid red' }}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-adtest="on"
                data-full-width-responsive="true"
            ></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>

        </div>
    );
}
