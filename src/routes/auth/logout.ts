import type { EndpointOutput } from "@sveltejs/kit";
import { auth } from "../../services/firebase";
import { respondLogout } from "./_respond";

export async function post(): Promise<Omit<EndpointOutput, 'headers'> & { headers?: { 'set-cookie': string | string[] } }> {
    await auth.signOut();
	return respondLogout();
}