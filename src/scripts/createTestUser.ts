import dotenv from 'dotenv';
import connectDB from '../mongoose'; // 상대 경로로 연결
import { UserModel } from '../models/mongoose/user.model';

dotenv.config();

async function createTestUser() {
  await connectDB();

  try {
    // 운영 환경에서는 드롭 금지
    if (process.env.NODE_ENV !== 'development') {
      throw new Error('Drop operation is only allowed in development.');
    }

    // 1. 기존 컬렉션 삭제 (드롭)
    await UserModel.collection.drop();
    console.log('User collection dropped successfully.');

    // 2. 새 사용자 삽입
    const user = new UserModel({
      nickname: '관리자',
      name: 'admin',
      email: 'admin@example.com',
    });

    const savedUser = await user.save();
    console.log('User created:', savedUser);
  } catch (error) {
    // 에러 처리
    if (error instanceof Error) {
      if (error.message.includes('ns not found')) {
        console.warn('User collection does not exist. Skipping drop.');
      } else {
        console.error('Error during drop or insert:', error.message);
      }
    } else {
      console.error('Unknown error:', error);
    }
  } finally {
    // 데이터베이스 연결 종료
    process.exit();
  }
}

createTestUser();

