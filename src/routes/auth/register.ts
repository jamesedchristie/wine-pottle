import { auth, usersCollection } from '../../services/firebase';
import { respond } from './_respond';

export async function post(request) {
	const newUser = request.body;

	// TODO individual properties
    try {
        const response = await auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
        await usersCollection.doc(response.user.uid).set({
            name: newUser.username,
            email: newUser.email
        });
        return respond(response);
    } catch (err) {
        return respond({ errors: err });
    }	
}