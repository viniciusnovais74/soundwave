import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const playlistUrl = searchParams.get('url');

    if (!playlistUrl) {
        return NextResponse.json({ error: 'URL da playlist é obrigatória' }, { status: 400 });
    }

    try {
        const { stdout } = await execPromise(`yt-dlp --flat-playlist -J "${playlistUrl}"`);
        const data = JSON.parse(stdout);
        const videos = data.entries.map(video => ({
            title: video.title,
            videoId: video.id,
            url: `https://www.youtube.com/watch?v=${video.id}`
        }));

        return NextResponse.json({ videos });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
