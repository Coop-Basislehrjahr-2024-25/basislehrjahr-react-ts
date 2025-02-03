import {AxiosRequestConfig} from 'axios';
import {GithubRepository, GithubUser} from '../types/github-types';

export function fetchUser(username: string): Promise<GithubUser> {
	throw new Error("Method not implemented.");
}

export function fetchRepos(username: string): Promise<GithubRepository[]> {
	throw new Error("Method not implemented.");
}

/**
 * Sollte verwendet werden bei Request an die Github API
 * @example
 *  axios.get<GithubUser>(URL, createGithubConfig())
 *
 */
function createGithubConfig(): AxiosRequestConfig {
	return ({
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
			'Accept': 'application/vnd.github+json'
		}
	});
}