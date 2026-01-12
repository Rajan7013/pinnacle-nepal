import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'linear-gradient(135deg, #003893, #DC143C)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                PN
            </div>
        ),
        {
            ...size,
        }
    )
}
