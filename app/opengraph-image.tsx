import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Pinnacle Nepal - Educational Consultancy'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(135deg, #003893 0%, #0052CC 50%, #DC143C 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ fontSize: 96, fontWeight: 'bold', marginBottom: 20 }}>
                    PINNACLE NEPAL
                </div>
                <div style={{ fontSize: 48, opacity: 0.9 }}>
                    Top Educational Consultancy in Kathmandu
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
