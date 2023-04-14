import AsyncStorage from '@react-native-async-storage/async-storage';

enum DataKey {
    TODO_DATA = 'data:todo-data',
}

class DataService {
    async setItem(key: DataKey, value: string) {
        await AsyncStorage.setItem(key.toString(), value);
    }

    async getItem(key: DataKey, fallback: any = null) {
        const value = await AsyncStorage.getItem(key.toString());

        if (!value) {
            return fallback;
        }

        return value;
    }

    async removeItem(key: DataKey) {
        await AsyncStorage.removeItem(key.toString());
    }

    async clearAll() {
        await AsyncStorage.clear();
    }

    async clearUserData() {
        const dataKeyValues = Object.values(DataKey).filter((value) => {
            return value.startsWith('data:') || value.includes(':user:');
        });
        console.log(dataKeyValues);

        await AsyncStorage.multiRemove(dataKeyValues);
    }
}

export default new DataService();
export { DataKey, DataService };
